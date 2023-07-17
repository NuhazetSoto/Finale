import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./TextEditor.css";
import { findProyecto, updateContent } from "../../../Services/proyecto.services";

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

function TextEditor() {
  const [content, setContent] = useState("");
  const { id } = useParams();
  const navigation = useNavigate()
  const usuarioId = localStorage.getItem('id')

  const handleContentChange = (value) => {
    setContent(value);
    console.log(content)
  };


  
  const handleContentUpdate =  async () => {

    const proyecto = await findProyecto(id)
    console.log(proyecto)
    const proyectoData = await updateContent({
        titulo: proyecto.titulo,
        sinopsis: proyecto.sinopsis,
        contenido: content,
        portada: proyecto.portada,
        usuario_id: proyecto.usuario_id,
        genero_id: proyecto.genero_id,
        created_at: proyecto.created_at,
        updated_at: proyecto.updated_at

    }, id)
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

export default TextEditor;
