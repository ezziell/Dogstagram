import React from 'react';
import uploadMichiPhoto from '../hooks/getProfile';
import uploadPortada from '../hooks/getPortada';
import "../styles/Account.scss";
import uploadPicture from '../hooks/uploadImages';
import datos from '../hooks/datos';

const Account = () => {
console.log(datos);

    return(
        <body>
            <div className='account-container'>
                <div className='portada-account'>

                </div>
                <div className='form-portada'>
                    <form id='uploadForm'>
                        <input id='filePortada' type="file" className="portada-file" name="file" />
                    </form>
                </div>
                <div className='portada-pic' id='portadaPic'>

                </div>

                <div className='profile-back'>
                  <button className='pfp-btn' onClick={uploadMichiPhoto} type="button" id='profilebtn'>Update picture</button>  
                </div>
                <div className='form-container'>
                <form id="uploadingForm">
                <input id='file' type="file" className='picture-file' name="file"/>
               </form>               
                </div>

                <div className='profile-pic' id="favorite-cats">

                </div>

                <div className='acc-info'>
                    <p className='acc-name' id='profileUser'>{datos[0]}</p>
                    <p className='acc-ifo' id='profileDes'>{datos[1]}</p>
                    <button className='update-header' id='portadabtn' onClick={uploadPortada} >Update picture</button>
                </div>
                <div className='acc-pictures'>
                <div className='add-images'>
                    <h2 className='post-title'>Post something</h2>
                    <p className='addSim'>+</p>
                    <button className='post-btn' onClick={uploadPicture}>post</button>
                </div>
                <div className='formpic'>
                <form id='formPic'>
                        <input id='fileAdd' type="file" className="addpic-file" name="file" />
                    </form>
                </div>
                <div className='upload-content' id='upload-content'>

                </div>
                </div>
            </div>
        </body>
    );
}

export default Account;

