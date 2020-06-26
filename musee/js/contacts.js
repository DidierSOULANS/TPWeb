$(function () {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    const lReservation = urlParams.get('reserv')

    const SOLO = "SOLO";
    const GROUPE = "GROUPE";
    const FAMILLE = "FAMILLE";
    const SENIOR = "SENIOR";
    const COUPLE = "COUPLE";
    const VIP = "VIP";

    if (lReservation != null) {
        let lReservationType = SOLO;
        switch (lReservation) {
            case SOLO:
                break;
            case GROUPE:
                lReservationType = GROUPE;
                break;
            case FAMILLE:
                lReservationType = FAMILLE;
                break;
            case SENIOR:
                lReservationType = SENIOR;
                break;
            case COUPLE:
                lReservationType = COUPLE;
                break;
            case VIP:
                lReservationType = VIP;
                break;
            default:
                break;
        }
        $("#subject").attr("value", "Demande de réservation");
        $("#message").text("Bonjour.\nNous souhaiterions effectuer une réservation " + lReservationType + ".\nCordialement");
    }
});