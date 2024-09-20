// I find how do that with 'option' in the documentation (a picture from that documentation on this readme) the link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
export default function SetDay(): JSX.Element {
    const newDate: Date = new Date();
    const options: Intl.DateTimeFormatOptions = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'}
    const currentDay: string = newDate.toLocaleDateString('pt-BR', options);
    
    return (
        <p>{currentDay.charAt(0).toUpperCase() + currentDay.slice(1)}</p>
    )
}