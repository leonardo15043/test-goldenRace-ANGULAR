export function tokenGenerator( range:number ){
    let text = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < range; i++){
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}