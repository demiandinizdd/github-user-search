import React, { useState } from 'react';
import ButtonApp from 'core/components/ButtonApp';
import { GitHubProfile } from 'core/types/GitHubProfile';
import InfoLoader from './components/Loaders/InfoLoader';
import Profile from './components/Profile';
import { makeRequest } from 'core/utils/request';
import './styles.scss';
import ImageLoader from './components/Loaders/ImageLoader';

const Search = () => {
    const [userName, setUserName] = useState('');
    const [profile, setProfile] = useState<GitHubProfile>();
    const [isLoading, setIsLoading] = useState(false);

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserName(event.target.value);
    }

    const handleOnClick = () => {
        setIsLoading(true);
        makeRequest({ method: 'GET', url: `/${userName}` })
        .then(response => {
            setProfile(response.data)
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
                        className="find-user"
                        placeholder="Usuário Github"
                        onChange={handleOnChange}
                    />
                </div>
                <ButtonApp text="Encontrar" onClick={handleOnClick} />
            </div>
            <div className="loader-content">
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