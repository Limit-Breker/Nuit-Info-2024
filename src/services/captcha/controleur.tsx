export function onKeyDown(e: React.KeyboardEvent<HTMLFormElement>) {
    switch (e.key) {
        case "38":
            alert("je vais a gauche")
            break;
        case "40":
            alert("je vais a droite")
            break;
    }
  }
