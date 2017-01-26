class Ajax{

    static get(url, callback){
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState === 4 && this.status === 200) {
                callback(JSON.parse(xhttp.response));
            }
        };
        xhttp.open("GET", url, true);
        xhttp.send();
    }
}

export default Ajax;