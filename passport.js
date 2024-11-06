
    document.getElementById('translateButton').addEventListener('click', function() {
        const issuedText = document.getElementById('issued');
        const surnameText = document.getElementById('surname');
        const nameText = document.getElementById('name');
        const patronymicText = document.getElementById('father');
        const genderText = document.getElementById('gender');
        const birthplaceText = document.getElementById('birthplace');

        if (issuedText.innerText === 'ГУ МВД ПО Г. МОСКВЕ') {
            issuedText.innerText = 'MOSCOW GU MVD';
            surnameText.innerText = 'Kosheleva';
            nameText.innerText = 'Daria';
            patronymicText.innerText = 'Andreevna';
            genderText.innerText = 'Female';
            birthplaceText.innerText = 'Moscow';
        } else {
            issuedText.innerText = 'ГУ МВД ПО Г. МОСКВЕ';
            surnameText.innerText = 'Кошелева';
            nameText.innerText = 'Дарья';
            patronymicText.innerText = 'Андреевна';
            genderText.innerText = 'Жен';
            birthplaceText.innerText = 'Москва';
        }
    });
