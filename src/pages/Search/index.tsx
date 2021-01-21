import React, { useState } from 'react';
import ButtonApp from 'core/components/ButtonApp';
import { GitHubProfile } from 'core/types/GitHubProfile';
import InfoLoader from './components/Loaders/InfoLoader';
import Profile from './components/Profile';
import { makeRequest } from 'core/utils/request';
import './styles.scss';
import ImageLoader from './components/Loaders/ImageLoader';

const showBackground = () => {
    const background = document.getElementsByClassName('loader-background');

    for (let i = 0; i < background.length; i++) {
        const loader = background[i];

        if (loader instanceof HTMLElement) {
            loader.style.display = "flex";
            return true;
        }
    }
};

const Search = () => {
    const [userName, setUserName] = useState('');
    const [profile, setProfile] = useState<GitHubProfile>();
    const [isLoading, setIsLoading] = useState(false);

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserName(event.target.value);
    }

    const handleOnClick = () => {
        setIsLoading(true);
        showBackground();
        makeRequest({ method: 'GET', url: `/${userName}` })
        .then(response => {
            setProfile(response.data)
        })
        .catch(error => {
            alert("Usuário não encontrado.")
        })
        .finally(() => {
            setIsLoading(false)
        });
    }

    return (
        <>
            <div className="find-profile-container">
                <div className="find-user-container">
                    <h1 className="find-user-lable">Encontre um perfil Github</h1>
                    <input 
                        type="text"
                        value={userName}
                        className="find-user-text"
                        placeholder="Usuário Github"
                        onChange={handleOnChange}
                    />
                </div>
                <ButtonApp text="Encontrar" onClick={handleOnClick} />
            </div>
            <div className="loader-content loader-background">
                {
                    isLoading ? <ImageLoader /> : <> </>
                }
                {
                    isLoading ? <InfoLoader /> : profile && <Profile profile={profile} />
                }
            </div>
        </>
    );
}

export default Search;