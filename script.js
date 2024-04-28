document.addEventListener('DOMContentLoaded', function () {
    const toggleSwitch1 = document.getElementById('toggle1');
    const slider1 = document.getElementById('slider1');
    const toggleDiv1 = document.querySelector('.toggle-div1');
    toggleSwitch1.addEventListener('change', function () {
        if (this.checked) {
            slider1.style.transform = 'translateX(1.75rem)';
            toggleDiv1.classList.add('bg-green-500');
        } else {
            slider1.style.transform = 'translateX(0)';
            toggleDiv1.classList.remove('bg-green-500');
            toggleDiv1.classList.add('bg-gray-300');
        }
    });


    const toggleSwitch2 = document.getElementById('toggle2');
    const slider2 = document.getElementById('slider2');
    const toggleDiv2 = document.querySelector('.toggle-div2');

    toggleSwitch2.addEventListener('change', function () {
        if (this.checked) {
            slider2.style.transform = 'translateX(1.75rem)';
            toggleDiv2.classList.add('bg-green-500');

        } else {
            slider2.style.transform = 'translateX(0)';
            toggleDiv2.classList.remove('bg-green-500');
            toggleDiv2.classList.add('bg-gray-300');
        }
    });

    const toggleSwitch3 = document.getElementById('toggle3');
    const slider3 = document.getElementById('slider3');
    const toggleDiv3 = document.querySelector('.toggle-div3');

    toggleSwitch3.addEventListener('change', function () {
        if (this.checked) {
            slider3.style.transform = 'translateX(1.75rem)';
            toggleDiv3.classList.add('bg-green-500');

        } else {
            slider3.style.transform = 'translateX(0)';
            toggleDiv3.classList.remove('bg-green-500');
            toggleDiv3.classList.add('bg-gray-300');
        }
    });

    const toggleSwitch4 = document.getElementById('toggle4');
    const slider4 = document.getElementById('slider4');
    const toggleDiv4 = document.querySelector('.toggle-div4');

    toggleSwitch4.addEventListener('change', function () {
        if (this.checked) {
            slider4.style.transform = 'translateX(1.75rem)';
            toggleDiv4.classList.add('bg-green-500');

        } else {
            slider4.style.transform = 'translateX(0)';
            toggleDiv4.classList.remove('bg-green-500');
            toggleDiv4.classList.add('bg-gray-300');
        }
    });

    const toggleSwitch5 = document.getElementById('toggle5');
    const slider5 = document.getElementById('slider5');
    const toggleDiv5 = document.querySelector('.toggle-div5');

    toggleSwitch5.addEventListener('change', function () {
        if (this.checked) {
            slider5.style.transform = 'translateX(1.75rem)';
            toggleDiv5.classList.add('bg-green-500');

        } else {
            slider5.style.transform = 'translateX(0)';
            toggleDiv5.classList.remove('bg-green-500');
            toggleDiv5.classList.add('bg-gray-300');
        }
    });

    const toggleSwitch6 = document.getElementById('toggle6');
    const slider6 = document.getElementById('slider6');
    const toggleDiv6 = document.querySelector('.toggle-div6');

    toggleSwitch6.addEventListener('change', function () {
        if (this.checked) {
            slider6.style.transform = 'translateX(1.75rem)';
            toggleDiv6.classList.add('bg-green-500');

        } else {
            slider6.style.transform = 'translateX(0)';
            toggleDiv6.classList.remove('bg-green-500');
            toggleDiv6.classList.add('bg-gray-300');
        }
    });
});