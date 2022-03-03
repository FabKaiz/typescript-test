const a: string = 'hello'
const n: number = 3
const b: boolean = true
const d: null = null
const arr: any[] = ['aze', 'azee', 3]
const user1: {firstname: string, [key: string]: string} = {firstname: 'Fab', lastname: 'Kaiz'}
//or
const user2 = {firstname: 'Fab', lastname: 'Kaiz'}
const date: Date = new Date()
const cb: Function = (e: MouseEvent): void => { // Function ou l'on nutilise pas le return

}

const compteur = document.querySelector('#compteur');
let i = 0;

const increment = (e: Event) => {
  e.preventDefault
  i++;
  const span = compteur?.querySelector('span')
  if (span) {
    span.innerText = i.toString();
  }
}

compteur?.addEventListener('click', increment);
