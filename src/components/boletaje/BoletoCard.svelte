<script>

    export let boleto;
    </script>

    <div class="card">
      <figure class="poster">
        <img src={boleto.img} alt={boleto.evento}>
      </figure>
    <ul>
      <li id="day">
        <span class="font-xl">{boleto.evento}</span>
      </li>
      <li id="location">
        <!--<p class="font-sm">Seccion: {boleto.section}</p>-->
        <p class="font-lg">Asiento: {boleto.asiento}</p>
        <p class="font-lg">Invitado: {boleto.invitado}</p>
      </li>
    </ul>
    </div>

    <style lang="sass">
    .card
      background-color: rgba(219,134,43,1.0)
      max-width: 99%
      min-height: 4em
      box-shadow: 0px 0px 20px 2px rgba(0,0,0,0.2)
      border-radius: 20px
      margin: auto
      padding-bottom: 2em

    .font-sm
      font-size: 0.8em
      color: rgba(0,0,0,1.0)
      padding: 0
      margin: 0

    .font-xl
      text-align: center
      font-size: 1.8em
      padding: 0
      margin: 0

    .font-lg
      font-size: 1em
      padding: 0
      margin: 0

    .font-2xl
      font-size: 2em
      padding: 0
      margin: 0

    ul
      display: flex
      list-style: none
      width: 100%
      margin: auto
      min-height: 4.5em
      padding: 0
      flex-flow: row wrap
      justify-content: flex-start
      align-items: center

    li
      padding: 0
      padding-right: 10em
      margin: 0
      margin-left: 0.8em
      margin-right: 0.8em

    .poster
        width: 100%
        margin: 0
        padding: 0
        img
          text-align: center
          margin: auto
          padding: 1em
          width: 18em
          height: auto

    #day
      min-width: 3em

    #location
      max-width: 800px
      padding-left: 0.8em
      padding-right: 0.8em
      p
        margin-top: 6px

    #time
      min-width: 4.4em


    @media (max-width: 724px)
      ul
        justify-content: start

      #location
        padding: 0
        margin-top: 8px

      li
        padding-right: 0

      .font-sm
        font-size: 0.6em

      .font-xl
        font-size: 1.2em

      .font-lg
        font-size: 1em

      .font-2xl
        font-size: 1.2em

    </style>