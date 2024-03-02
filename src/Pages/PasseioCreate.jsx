import { useState } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage, db } from "./../Firebase";
import { addDoc, collection } from "@firebase/firestore";
import { v4 as uuidv4 } from "uuid";
import logo from './../img/logo.png'

function App() {
    const [imageUploads, setImageUploads] = useState([]);
    const [formData, setFormData] = useState({
        id: uuidv4(), // Gerando um ID único para o novo cadastro
        nome: "",
        instituicao: "",
        data: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleUploadAndSubmit = async () => {
        // Upload das imagens
        const uploadedImageUrls = await Promise.all(imageUploads.map(async (imageUpload) => {
            const imageRef = ref(storage, `images/${imageUpload.name + uuidv4()}`);
            await uploadBytes(imageRef, imageUpload);
            const downloadURL = await getDownloadURL(imageRef);
            return downloadURL;
        }));

        // Combine os dados do formulário com os URLs das imagens e o ID gerado
        const formDataWithImages = { ...formData, imageUrls: uploadedImageUrls };

        // Envie os dados do formulário para o banco de dados
        const valRef = collection(db, 'db');
        await addDoc(valRef, formDataWithImages);
        alert("Dado adicionado");

        // Limpe os campos do formulário e as imagens carregadas após o envio
        setFormData({
            id: uuidv4(), // Gerando um novo ID único para o próximo cadastro
            nome: "",
            instituicao: "",
            data: ""
        });
        setImageUploads([]);
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
                    <label>Nome do Passeio</label> <br />
                    <input
                        className='w-full mb-10 border-b-2 border-grayT focus:outline-none focus:border-yellow-300'
                        type="text"
                        name="nome"
                        placeholder="Nome do Passeio"
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
                    <label>Data</label> <br />
                    <input  
                        className='w-full mb-10 border-b-2 border-grayT focus:outline-none focus:border-yellow-300'
                        type="date"
                        name="data"
                        placeholder="Data"
                        value={formData.data}
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
