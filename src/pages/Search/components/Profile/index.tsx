import React from 'react';
import ButtonApp from 'core/components/ButtonApp';
import { GitHubProfile } from 'core/types/GitHubProfile';
import './styles.scss';
import dayjs from 'dayjs';

type ProfileProps = {
    profile: GitHubProfile
}

const Profile = ({ profile }: ProfileProps) => (
    <div className="profile-container">
        <div className="profile-view">
            <img 
                src={profile.avatar_url}
                className="profile-image" 
                alt=""
            />
            <a 
                href={`https://github.com/${profile.login}`}
                target='blank'
            >
                <ButtonApp text="Ver perfil" />
            </a>
        </div>
        <div className="profile-repository-info">
            <ul className="repositories">
                <li>{`Repositórios públicos: ${profile.public_repos}`} </li>
                <li>{`Seguidores: ${profile.followers}`} </li>
                <li>{`Seguindo: ${profile.following}`}  </li>
            </ul>
            <div className="profile-container-info">
                <h1 className="profile-title-info">Informações</h1>
                <input readOnly type="text" className="profile-input" value={`Empresa: ${profile.company}  `}></input>
                <input readOnly type="text" className="profile-input" value={`Website/Blog: ${profile.blog} `} />
                <input readOnly type="text" className="profile-input" value={`Localidade: ${profile.location} `} />
                <input readOnly type="text" className="profile-input" value={`Membro desde: ${dayjs(profile.created_at).format('DD/MM/YYYY')} `} />
            </div>
        </div>
    </div>
);

export default Profile;