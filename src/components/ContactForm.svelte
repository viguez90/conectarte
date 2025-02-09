<script>
import { createContact } from "../lib/appwriteUtils";

  const data = [
    { label: "Nombre", id: "name", type: "text" },
    { label: "Apellido", id: "lastname", type: "text" },
    { label: "Correo", id: "mail", type: "text" },
    { label: "Telefono", id: "phone", type: "tel" },
  ];


  let text = '';



  let privacyAcept = false;

  async function handleSubmit(event) {
    event.preventDefault(); // Evita el envío clásico del formulario

    // Recopila los datos del formulario
    const formData = new FormData(event.target);
    const contactData = {
      name: formData.get('name'),
      lastname: formData.get('lastname'),
      mail: formData.get('mail'),
      phone: formData.get('phone'),
      privacyAcept: formData.get('privacidad') === 'on',
      message: formData.get('message'),
    };

    try {
      await createContact(contactData); 
      alert('Contacto creado exitosamente!');
      event.target.reset();
      privacyAcept = false;
    } catch (error) {
      alert('Error al crear el contacto: ' + error.message);
    }
  }


</script>

<form class="form-container" on:submit={handleSubmit}>

  <h1>Escribenos</h1>
  
  <div class="form-items">

  {#each data as item (item.id)}
    <div class="form-input-item">
      <input type={item.type} id={item.id} name={item.id} required>
      <label for={item.id}>{item.label}</label>
    </div>
  {/each}

  </div>


  <div class="form-message">

    <div id="void"></div>

    <div class="box-message">
      <textarea name="message" id="message" class={text.trim() === '' ? 'empty' : ''} bind:value={text}></textarea>
      <label for="message" >Tu mensaje</label>
    </div>
    
    <div class="checking">
      <input type="checkbox" id="privacidad" name="privacidad" required bind:checked={privacyAcept}>
      <label for="privacidad">He leido la politica de privacidad y acepto los Terminos y Condiciones planteados en ella: </label>
      <a href="/privacidad">leer</a>
    </div>

    <div class="form-submit">
      <button type="submit">Enviar</button>
    </div>

  </div>
  
</form>




<style>
.form-container {
  background: rgba(219,134,43,1.0);
  max-width: 900px;
  margin: auto;
  margin-bottom: 1em;
  padding: 2em;
  height: auto;
  box-shadow: 0px 0px 18px 2px rgba(0,0,0,0.2);
}

h1 {
  font-family: 'anaktoria';
  text-align: center;
  padding-bottom: 0.8em;
  color: rgba(255,255,255,1);
}

.form-items {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
}

.form-input-item {
  padding: 1em;
  width: 300px;
}

.form-items label {
  position: relative;
  bottom: 2em;
  margin: auto;
  color: rgba(255,255,255,0.5);
}

input {
  width: 100%;
  padding: 10px;
  outline: none;
  background: rgba(0,0,0,0);
  border: 0px;
  border-bottom: 1px solid rgba(255,255,255,0.08);
  color: rgba(255,255,255,1.0);
  font-size: 1em;
}

input:focus {
  border-bottom: 1px solid rgba(255,255,255,0.8);
  transition: border-bottom 0.8s ease;
}

input:focus + label {
  bottom: 3.6em;
  color: rgba(255,255,255,1);;
  transition: bottom 0.2s ease, color 0.5s ease;
}

input:valid {
  border-bottom: 1px solid rgba(255,255,255,1);
}

input:valid + label {
  bottom: 3.6em;
  color: rgba(255,255,255,1);
}

.form-message {
  margin: auto;
  overflow: hidden;
  padding: 0;
}

#void {
  height: 1.8em;
}

.box-message label {
  position: relative;
  bottom: 14em;
  left: 1.1em;
  width: 20em;
  color: rgba(255,255,255,1);
}

.box-message textarea {
  width: 94%;
  height: 200px;
  padding: 20px;
  background: rgba(0,0,0,0.1);
  border: 0;
  outline: none;
  color: rgba(255,255,255,1.0);
  font-size: 1em;
  resize: none;
}

.box-message textarea.empty:focus {
  border: 1px solid rgba(255,255,255,0.8);
  transition: border 0.8s ease;
}

.box-message textarea.empty:focus + label {
  color: rgba(255,255,255,1);
  bottom: 17.2em;
  transition: bottom 0.4s ease, color 0.5s ease;
}

.box-message textarea:valid {
  border: 1px solid rgba(255,255,255,1);
}

.box-message textarea:valid + label {
  color: rgba(255,255,255,1);
  bottom: 17.2em;
}

.box-message textarea.empty {
  border: 0;
}

.box-message textarea.empty + label {
  color: rgba(255,255,255,0.6);
  bottom: 14em;
}

.form-submit {
  margin-left: 38%;
}

.form-submit button {
  font-family: 'cardo-regular';
  font-size: 1.6em;
  font-weight: bold;
  background: rgba(172,61,22,0.96);
  color: rgba(255,255,255,0.8);
  border: 0;
  padding: 1em;
  padding-top: 12px;
  padding-bottom: 12px;
  margin: 0;
}

.form-submit button:hover {
  cursor: pointer;
  background: rgba(219,175,112,1.0);
  color: black;
  box-shadow: 0px 0px 2px 2px rgba(206, 166, 107, 0.4);
  transition: background 0.4s ease, color 0.4s ease;
}

.form-submit button:active {
  cursor: pointer;
  background: rgba(219,134,43,1.0);
  color: rgba(255,255,255,0.8);  
  box-shadow: 0px 0px 2px 2px rgba(206, 166, 107, 0.4);
  transition: background 0.8s ease, color 0.4s ease, box-shadow 0.2s ease;
}

.checking {
  width: 100%;
  padding-bottom: 2em;
}

.checking input {
  width: 20px;
  background-color: rgba(255, 255, 255, 1.0);
}

.checking label {
  margin: 0;
  padding: 0;
  color: rgba(255, 255, 255, 1.0);
  font-size: 14px;
}

.checking a {
  font-size: 14px;
  text-decoration: none;
  color: rgba(172,61,22,0.96)
}

.checking a:hover {
  color: black;
}

.checking input:valid + label {
  color: rgba(255, 255, 255, 1.0);
}

.checking input:invalid + label {
  color: rgba(255, 255, 255, 0.5);
}

@media (max-width: 790px){
  .form-message textarea {
    width: 90%;
  }
}

@media (max-width: 514px){
  .form-message textarea {
    width: 88%;
  }
}

@media (max-width: 440px){
  .form-message textarea {
    width: 84%;
  }
  .form-submit {
    margin-left: 28%;
  }
}

@media (max-width: 315px) {
  .form-submit {
    margin-left: 22%;
  }
}
</style>
