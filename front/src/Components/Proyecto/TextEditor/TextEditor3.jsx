import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./TextEditor.css";
import {
    createProyecto,
  findProyecto,
  updateContent,
} from "../../../Services/proyecto.services";

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
  ],
};

export default function TextEditor3({titulo}) {
  const [content, setContent] = useState("");
  const { id } = useParams();
  const navigation = useNavigate()
  const usuarioId = localStorage.getItem('id')

  const handleContentChange = (value) => {
    setContent(value);
    console.log(content)
  };


  
  const handleContentUpdate =  async () => {

    const proyectoData = await createProyecto({
      titulo: titulo,
      contenido: content,
      usuario_id: usuarioId,
    });
    navigation(`/usuario/${usuarioId}/misproyectos`);
    console.log(proyectoData)
  }
 
  return (
    <div className="container">
      <div className="row">
        <div className="editor">
          <ReactQuill
            theme="snow"
            value={content}
            onChange={handleContentChange}
            className="editor-input"
          />
        </div>
        <div className="preview">
          <div dangerouslySetInnerHTML={{ __html: content }} />

          <button className="add-page-btn" onClick={handleContentUpdate} >
            Add Page
          </button>
        </div>
      </div>
    </div>
  );
}

//export default TextEditor3;
