const images =()=>{
    const imgPopup = document.createElement ('div');
    const workSection = document.querySelector('.works');
    const bigImage = document.createElement('img');

    imgPopup.classList.add('popup');
    imgPopup.style.alignItems = 'center';
    workSection.appendChild(imgPopup);

    imgPopup.style.justifyContent = 'center';
    imgPopup.style.alignContent = 'center';
    imgPopup.style.display = 'none';
    imgPopup.appendChild(bigImage);

    workSection.addEventListener('click',(e)=>{
        e.preventDefault();
        let target = e.target;

        if(target && target.classList.contains('preview')){
            imgPopup.style.display = 'flex';
            const path = target.parentNode.getAttribute('href');
            bigImage.setAttribute('src',path);
            bigImage.style.width = '50%';
            bigImage.style.height = '50%';
            bigImage.style.marginBottom = '';
            document.body.style.overflow = 'hidden';
        }
        if(target && target.matches('div.popup')){
            imgPopup.style.display = 'none';
            document.body.style.overflow = '';
        }

    });



};

export default images;