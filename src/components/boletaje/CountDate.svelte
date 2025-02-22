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
        const now = new Date();
        const endDate = new Date(dateEvent);
        const totalSeconds = Math.floor((endDate - now) / 1000);

        if (totalSeconds < 0 && !hasReloaded) {
            timeRemaining = { months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };
            hasReloaded = true;
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
    <p>{timeRemaining.months} meses</p>
    <p>{timeRemaining.days} días</p>
    <p>{timeRemaining.hours} horas</p>
    <p>{timeRemaining.minutes} minutos</p>
    <p>{timeRemaining.seconds} segundos</p>
</div>



<style lang="sass">
    p
        margin: 5px 0

    .countdown
        text-align: center
        font-size: 2em
</style>