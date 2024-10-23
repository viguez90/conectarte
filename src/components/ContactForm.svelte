<script>
  const data = [
    { label: "Nombre", id: "name", type: "text" },
    { label: "Apellido", id: "lastname", type: "text" },
    { label: "Correo", id: "mail", type: "email" },
    { label: "Telefono", id: "phone", type: "tel" },
  ];
</script>

<form class="form-container">
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
    <textarea name="message" id="message"></textarea>
    <label for="message" >Tu mensaje</label>
    <div class="form-submit">
      <button type="submit">Enviar</button>
    </div>
  </div>
</form>




<style>
.form-container {
  background: rgba(0,0,0,0.2);
  max-width: 700px;
  margin: auto;
  margin-bottom: 1em;
  padding: 2em;
  height: auto;
  box-shadow: 0px 0px 18px 2px rgba(0,0,0,0.2);
}

h1 {
  text-align: center;
  padding-bottom: 0.8em;
  color: rgba(255,255,255,0.8);
}

.form-items {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
  padding-bottom: 1em;
}

.form-input-item {
  padding: 1em;
  width: 300px;
}

.form-items label {
  position: relative;
  bottom: 2em;
  margin: auto;
  color: rgba(206, 166, 107, 0.6);
}

input {
  width: 100%;
  padding: 10px;
  outline: none;
  background: rgba(0,0,0,0);
  border: 0px;
  border-bottom: 1px solid rgba(206, 166, 107, 0.08);
  color: rgba(255,255,255,0.8);
  font-size: 1em;
}

input:focus {
  border-bottom: 1px solid rgba(206, 166, 107, 1.0);
  transition: border-bottom 0.8s ease;
}

input:focus + label {
  bottom: 3.6em;
  color: rgba(206, 166, 107, 1.0 );
  transition: bottom 0.3s ease, color 0.5s ease;
}

.form-message {
  margin: auto;
  overflow: hidden;
  color: rgba(206, 166, 107, 0.6);
  padding: 0;
}

#void {
  height: 1.8em;
}

.form-message label {
  position: relative;
  bottom: 14em;
  left: 1.1em;
  width: 20em;
}

.form-message textarea {
  width: 94%;
  height: 200px;
  padding: 20px;
  background: rgba(0,0,0,0.06);
  border: 0;
  outline: none;
  color: rgba(255,255,255,0.8);
  font-size: 1em;
  resize: none;
}

.form-message textarea:focus {
  border: 1px solid rgba(206, 166, 107, 0.8);
  transition: border 0.8s ease;
}

.form-message textarea:focus + label {
  color: rgba(206, 166, 107, 1.0);
  bottom: 17.2em;
  transition: bottom 0.4s ease, color 0.5s ease;
}

.form-submit {
  margin-left: 38%;
}

.form-submit button {
  font-family: SUSE;
  font-size: 1.6em;
  font-weight: bold;
  background: linear-gradient(90deg, rgba(132,106,69,0.2) 0%, rgba(219,175,112,0.2) 100%);;
  color: rgba(255,255,255,0.2);
  border: 0;
  padding: 1em;
  padding-top: 12px;
  padding-bottom: 12px;
  margin: 0;
  margin-bottom: 20px;
}


.form-submit button:hover {
  cursor: pointer;
  background: linear-gradient(124deg, rgba(132,106,69,1) 25%, rgba(219,175,112,1) 100%);
  color: rgba(255,255,255,0.8);  
  box-shadow: 0px 0px 2px 2px rgba(206, 166, 107, 0.4);
  text-shadow: 0px 0px 2px rgba(255,255,255,0.4);
  transition: background 0.8s ease, color 0.4s ease, box-shadow 0.2s ease;
}

.form-submit button:active {
  cursor: pointer;
  background: linear-gradient(90deg, rgba(132,106,69,1) 25%, rgba(219,175,112,1) 100%);
  color: rgba(255,255,255,0.8);  
  box-shadow: 0px 0px 2px 2px rgba(206, 166, 107, 0.4);
  text-shadow: 0px 0px 2px rgba(255,255,255,0.4);
  transition: background 0.8s ease, color 0.4s ease, box-shadow 0.2s ease;
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
}
</style>
