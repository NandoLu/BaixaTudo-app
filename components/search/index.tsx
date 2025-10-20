import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Image, TouchableOpacity, Alert, ActivityIndicator } from "react-native";
import * as FileSystem from 'expo-file-system/legacy';
import * as MediaLibrary from 'expo-media-library';
import { Buffer } from 'buffer';
import { styles } from './Search';

const SERVER_URL = 'http://192.168.1.234:3000/'; 

export default function Search() {
 const [link, setLink] = useState('');
 const [isLoading, setIsLoading] = useState(false);

 // Função utilitária para limpar URLs do YouTube (remover parâmetros desnecessários)
 const getCleanYoutubeUrl = (url: string) => {
  try {
   const urlObj = new URL(url);
   const videoId = urlObj.searchParams.get('v');
   if (videoId) {
    return `https://www.youtube.com/watch?v=${videoId}`;
   }
   return url;
  } catch (e) {
   return url;
  }
 };

 // Função para mover o arquivo da pasta privada do app para a biblioteca de mídia pública
 const saveFileToDevice = async (uri: string) => {
  const { status } = await MediaLibrary.requestPermissionsAsync();

  if (status !== 'granted') {
   Alert.alert("Permissão Necessária", "Precisamos de acesso à sua biblioteca de mídia para salvar a música.");
   return;
  }

  try {
   // 1. Cria um asset (referência) para a URI temporária
   const asset = await MediaLibrary.createAssetAsync(uri);
   
   // 2. Tenta obter o álbum "BaixaTudo Músicas"
   const album = await MediaLibrary.getAlbumAsync('BaixaTudo Músicas');

   // 3. Salva no álbum (cria se não existir)
   if (album == null) {
    await MediaLibrary.createAlbumAsync('BaixaTudo Músicas', asset, false);
   } else {
    await MediaLibrary.addAssetsToAlbumAsync([asset], album, false);
   }

   Alert.alert("Sucesso!", `Música salva na sua biblioteca de mídia (Álbum "BaixaTudo Músicas").`);
  } catch (error) {
   console.error("Erro ao salvar na biblioteca de mídia:", error);
   Alert.alert("Erro ao Salvar", "O arquivo foi baixado, mas não pôde ser movido para a sua biblioteca de mídia.");
  } finally {
   // Deleta o arquivo temporário da pasta do app (limpeza)
   await FileSystem.deleteAsync(uri, { idempotent: true });
  }
 };


 const handleDownload = async () => {
  if (!link) {
   Alert.alert("Erro", "Por favor, cole um link.");
   return;
  }

  setIsLoading(true);
  let tempFileUri = ''; // Variável para armazenar a URI temporária para limpeza em caso de erro

  try {
   const cleanedLink = getCleanYoutubeUrl(link);
   const downloadUrl = `${SERVER_URL}download`; // Usa a SERVER_URL definida localmente

   // 1. Requisição POST para o servidor
   const response = await fetch(downloadUrl, {
    method: 'POST',
    headers: {
     'Content-Type': 'application/json'
    },
    body: JSON.stringify({ url: cleanedLink })
   });

   if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText || "Erro desconhecido");
   }

   // 2. Extrai o nome do arquivo, se disponível
   const disposition = response.headers.get('content-disposition');
   let fileName = `musica-${Date.now()}.mp3`;

   if (disposition) {
    const fileNameMatch = /filename="(.+)"/.exec(disposition);
    if (fileNameMatch && fileNameMatch[1]) {
     // Limpa as aspas do nome do arquivo
     fileName = fileNameMatch[1].replace(/"/g, '');
    }
   }

   // 3. Processa a resposta binária em Base64
   const blob = await response.blob();
   const arrayBuffer = await new Response(blob).arrayBuffer();
   // Converte o ArrayBuffer em Base64
   const base64 = Buffer.from(arrayBuffer).toString('base64');


   // 4. Salva temporariamente o arquivo na pasta privada do app
   const fileUri = (FileSystem as any).documentDirectory + fileName;
   tempFileUri = fileUri; // Armazena a URI temporária

   await FileSystem.writeAsStringAsync(
    fileUri,
    base64,
    {
     // Usa a string literal 'base64', resolvendo o problema de runtime e tipagem
     encoding: 'base64'
    }
   );

   // 5. Move o arquivo para a biblioteca de mídia pública
   await saveFileToDevice(fileUri);
   setLink(''); // Limpa o link após sucesso


  } catch (error) {
   let errorMessage = "Ocorreu um erro ao baixar a música.";
   if (error instanceof Error) {
    errorMessage = error.message;
   }
   console.error("Erro ao baixar:", error);
   Alert.alert("Erro", `Não foi possível baixar a música: ${errorMessage}. Verifique o link e se o servidor Node.js está rodando.`);
   
   // Limpa o arquivo temporário se a falha ocorreu após o salvamento local
   if (tempFileUri) {
     await FileSystem.deleteAsync(tempFileUri, { idempotent: true });
   }

  } finally {
   setIsLoading(false);
  }
 };

 return (
  <View style={styles.container}>
   <View style={styles.inputGroup}>
    <TextInput
     style={styles.textInput}
     placeholder="Cole o link..."
     placeholderTextColor="#aaa"
     value={link}
     onChangeText={setLink}
     editable={!isLoading}
    />
    <TouchableOpacity
     style={[styles.btn, isLoading && { opacity: 0.7 }]}
     onPress={handleDownload}
     disabled={isLoading}
    >
     {isLoading ? (
      <ActivityIndicator size="small" color="#fff" />
     ) : (
      <Image
       source={require('../../assets/images/logo.png')}
       style={styles.image}
      />
     )}
    </TouchableOpacity>
   </View>
  </View>
 );
}
