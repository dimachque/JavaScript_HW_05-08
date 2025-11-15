window.onload = function() {
    document.querySelector('#generateBtn').addEventListener('click', function() {
        const person = personGenerator.getPerson();
        
        document.querySelector('#surnameOutput').innerText = person.surname + ' ';
        document.querySelector('#firstNameOutput').innerText = person.firstName + ' ';
        document.querySelector('#patronymicOutput').innerText = person.patronymic;
        document.querySelector('#genderOutput').innerText = person.gender;
        document.querySelector('#birthDateOutput').innerText = person.birthDate;
        document.querySelector('#professionOutput').innerText = person.profession;
    });

    document.querySelector('#clearBtn').addEventListener('click', function() {
        document.querySelector('#surnameOutput').innerText = '';
        document.querySelector('#firstNameOutput').innerText = '';
        document.querySelector('#patronymicOutput').innerText = '';
        document.querySelector('#genderOutput').innerText = '';
        document.querySelector('#birthDateOutput').innerText = '';
        document.querySelector('#professionOutput').innerText = '';
    });
};