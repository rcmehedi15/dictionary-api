const handleSearch = () => {
    const searchField = document.getElementById('search-field').value;
    if (searchField) {
        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchField}`)
            .then(res => res.json())
            .then((data) => {
                if(data.title === "No Definitions Found"){
                    alert(data.message);
                }
                else{
                    displayResult(data)
                }

            });
        } else{
            alert('Empty input field');
        }
    };
    const displayResult = (data) => {
        const parent = document.getElementById("audio-container");
        data[0].phonetics.forEach((element) => {
            const audio = document.createElement("audio");
            audio.src = element.audio;
            
            const button = document.createElement("button");
            button.innerHTML = "Play";
            button.onclick = () => {
                audio.play();
            };
            const container = document.createElement("div");
            
            

            container.appendChild(button);
            container.appendChild(audio);

            parent.appendChild(container);

        })
    }