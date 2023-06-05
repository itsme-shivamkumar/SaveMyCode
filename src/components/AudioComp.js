import React, { useRef, useState } from 'react'

let mimeType;

const AudioComp = () => {
    const [stream,setStream]=useState(null);
    const [audioChunk,setAudioChunk]=useState([]);
    const [audio,setAudio]=useState(null);
    const mediaRecorder=useRef(null);

    const handleCamera=()=>{

    }

    const startRecording=async()=>{
        const media=new MediaRecorder(stream,{type:mimeType});
        mediaRecorder.current=media;
        mediaRecorder.current.start();
        let localAudioChunks=[];
        mediaRecorder.current.ondataavailable=(event)=>{
            if(typeof event.data==="undefined")return;
            if(event.data.size===0)return;
            localAudioChunks.push(event.data)
        };
        setAudioChunk(localAudioChunks);
    }

    const stopRecording=async()=>{
        mediaRecorder.current.stop();
        mediaRecorder.current.onstop=()=>{
            const audioBlob=new Blob(audioChunk,{type:mimeType});
            const audioUrl=URL.createObjectURL(audioBlob);
            setAudio(audioUrl);
            setAudioChunk([]);
        }
    }

    const handleMicrophone=async()=>{
        if("MediaRecorder" in window){
            mimeType="audio/ogg"
            try{
                const streamData=await navigator.mediaDevices.getUserMedia({
                    audio:true,
                    video:false,
                });
                setStream(streamData);
                console.log(stream);
            }
            catch(err){
                console.log(err);
            }
        }
        else{
            console.log("no mediarecorder in window")
        }
    }
  return (
    <div>
        <button onClick={handleMicrophone} >Get Microphone</button>
        <button onClick={handleCamera} >Get Camera</button>
        <button onClick={startRecording} type="button">Start Recording</button>
        <button onClick={stopRecording} type="button">Stop Recording</button>
        <a download href={audio}>Download Recording</a>
    </div>
  )
}

export default AudioComp