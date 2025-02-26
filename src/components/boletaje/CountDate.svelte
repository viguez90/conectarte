<script lang="ts">
    import { onDestroy } from 'svelte';

    export let dateEvent;


    let timeRemaining = {
        months: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    };

    const calculateTimeRemaining = () => {
        const now: Date = new Date();
        const totalSeconds = Math.floor((dateEvent - now) / 1000);

        if (totalSeconds == 0) {
            timeRemaining = { months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };
            window.location.reload();
            return;
        }

        const secondsInMonth = 30 * 24 * 60 * 60; // Aproximación de 30 días por mes
        timeRemaining.months = Math.floor(totalSeconds / secondsInMonth);
        const remainingAfterMonths = totalSeconds % secondsInMonth;

        timeRemaining.days = Math.floor(remainingAfterMonths / (24 * 60 * 60));
        const remainingAfterDays = remainingAfterMonths % (24 * 60 * 60);

        timeRemaining.hours = Math.floor(remainingAfterDays / (60 * 60));
        const remainingAfterHours = remainingAfterDays % (60 * 60);

        timeRemaining.minutes = Math.floor(remainingAfterHours / 60);
        timeRemaining.seconds = remainingAfterHours % 60;
    };

    const updateCounter = () => {
        calculateTimeRemaining();
    };

    // Actualizar cada segundo
    const interval = setInterval(updateCounter, 1000);

    // Limpiar el intervalo al destruir el componente
    onDestroy(() => {
        clearInterval(interval);
    });

    // Calcular el tiempo inicial
    calculateTimeRemaining();
</script>

<div class="countdown">
    <h1>Faltan</h1>
    <div class="time-unit">
        <span class="value">{timeRemaining.months}</span>
        <span class="label">meses</span>
    </div>
    <div class="time-unit">
        <span class="value">{timeRemaining.days}</span>
        <span class="label">días</span>
    </div>
    <div class="time-unit">
        <span class="value">{timeRemaining.hours}</span>
        <span class="label">horas</span>
    </div>
    <div class="time-unit">
        <span class="value">{timeRemaining.minutes}</span>
        <span class="label">minutos</span>
    </div>
    <div class="time-unit">
        <span class="value">{timeRemaining.seconds}</span>
        <span class="label">segundos</span>
    </div>
</div>

<style lang="sass">
  .countdown
    display: flex
    justify-content: space-around
    align-items: center
    flex-flow: row wrap
    background-color: #AB3D16
    border-radius: 15px
    padding: 20px
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2)
    color: #fff
    font-family: 'Arial', sans-serif
    font-size: 1.2em

  .time-unit
    display: flex
    flex-direction: column
    align-items: center
    margin: 10px

  .value
    font-size: 3em
    font-weight: bold

  .label
    font-size: 1em
    text-transform: uppercase
    opacity: 0.7

  @media (max-width: 724px)
    .countdown
      flex-direction: column
      font-size: 14px

</style>