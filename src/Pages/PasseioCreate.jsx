import { useState } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage, db } from "./../Firebase";
import { addDoc, collection } from "@firebase/firestore";
import { v4 as uuidv4 } from "uuid";
import logo from './../img/logo.png'

function App() {
    const [imageUploads, setImageUploads] = useState([]);
    const [imageUrls, setImageUrls] = useState([]);
    const [formData, setFormData] = useState({
        nome: "",
        instituicao: "",
        local: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const uploadFiles = () => {
        imageUploads.forEach((imageUpload) => {
            const imageRef = ref(storage, `images/${imageUpload.name + uuidv4()}`);
            uploadBytes(imageRef, imageUpload).then((snapshot) => {
                getDownloadURL(snapshot.ref).then((url) => {
                    setImageUrls((prev) => [...prev, url]);
                });
            });
        });
    };

    const handleFormSubmit = async () => {
        // Combine formData with imageUrls
        const formDataCombined = { ...formData, imageUrls: imageUrls };

        // Add the combined data to the database
        const valRef = collection(db, 'db');
        await addDoc(valRef, formDataCombined);
        alert("Dado adicionado");

        // Limpa os campos do formulário e as imagens carregadas após o envio
        setFormData({
            nome: "",
            instituicao: "",
            local: ""
        });
        setImageUrls([]);
        setImageUploads([]);
    };

    const handleUploadAndSubmit = () => {
        // Primeiro, carrega as imagens
        uploadFiles();

        // Depois, envia os dados do formulário
        handleFormSubmit();
    };

    const handleFileChange = (event) => {
        const files = event.target.files;
        const newImageUploads = [];
        for (let i = 0; i < files.length; i++) {
            newImageUploads.push(files[i]);
        }
        setImageUploads(newImageUploads);
    };

    return (
        <div className='relative w-full h-screen flex items-center bg-slate-100 justify-center '>
            <div className='flex w-[500px] items-center flex-col  rounded-md shadow-2xl py-10'>
                <img className='w-40 h-40' src={logo} />
                <div className='w-full  px-20'>
                    <label>Nome</label> <br />
                    <input
                        className='w-full mb-10 border-b-2 border-grayT focus:outline-none focus:border-yellow-300'
                        type="text"
                        name="nome"
                        placeholder="Nome"
                        value={formData.nome}
                        onChange={handleChange}
                    />
                </div>
                <div className='w-full px-20'>
                    <label>Instituição</label> <br />
                    <input
                        className='w-full mb-10 border-b-2 border-grayT focus:outline-none focus:border-yellow-300'
                        type="text"
                        name="instituicao"
                        placeholder="Instituição"
                        value={formData.instituicao}
                        onChange={handleChange}
                    />
                </div>
                <div className='w-full px-20'>
                    <label>Local</label> <br />
                    <input
                        className='w-full mb-10 border-b-2 border-grayT focus:outline-none focus:border-yellow-300'
                        type="text"
                        name="local"
                        placeholder="Local"
                        value={formData.local}
                        onChange={handleChange}
                    />
                </div>
                <div className='w-full mb-10 px-20'>
                    <input
                        type="file"
                        multiple
                        onChange={handleFileChange}
                        className="border-yellow-300"
                    />
                </div>
                <button className='bg-yellow-300 px-10 py-1 rounded-ful l' onClick={handleUploadAndSubmit}>Enviar</button>
            </div>
        </div>
    );
}

export default App;
