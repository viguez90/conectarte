<script lang="ts">
    import { appwriteFetchData } from "@lib/appwriteUtils";
    import { updatePass } from "@lib/appwriteUtils";

    console.log("#############################################");
    console.log("UPDATE DATA ENTER");
    console.log("#############################################");

    let collectionId = "67acc955002e42eada23";
    let data: any[] = [];
    let update: any[] = [];

    const attributeToUpdate = 'evento'; // El atributo que quieres actualizar
    const newValue = "VIVA LA VIDA  Demiurgo Foro Cultural 15/03/25"; // El nuevo valor para ese atributo


    async function upBase() {
    console.log("#############################################");
    console.log("upBase ENTER");
    console.log("#############################################");
    try {
      data = await appwriteFetchData(
        import.meta.env.PUBLIC_APPWRITE_DB_ID,
        collectionId,
        72
      );
      update = data.map(
        (e) => {
          updatePass(collectionId, e.$id, attributeToUpdate, newValue)
            .then(response => {
              console.log('Documento actualizado:', e.id);
            })
            .catch(error => {
              console.error('Error al actualizar el documento:', error);
            })
        }
      );
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  }

  upBase();

</script>

