import React from 'react';
import { NavbarAdmin } from '../../../Components/Admin/NavbarAdmin';
import { useNavigate } from 'react-router-dom';
import { useUserDetails } from '../../../shared/hooks/Profile/useUserDetails';

export const HomeAdminApp = () => {
  const navigate = useNavigate();
  const { nameUser } = useUserDetails();

  const goToPage = (ruta) => {
    navigate(ruta);
  };

  return (
    <div>
      <NavbarAdmin />
      <h2>¡Bienvenido {nameUser}!</h2>
      <h1>Acá podras encontrar lo siguiente</h1>
      <br></br>
      <div className="row">
        <div className="col-md-4 mb-3">
          <div className="card h-100 d-flex flex-column justify-content-center align-items-center">
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Categorías de un hotel</h5>
              <img
                src="https://i.ytimg.com/vi/0jMZlGb5Rr0/maxresdefault.jpg"
                class="img-fluid" 
                alt="..."
                style={{ width: '200px', height: '200px', objectFit: 'cover', margin: 'auto' }}
              ></img>
              <p className="card-text">Página de CRUD de categorías de hotel</p>
              <button onClick={() => goToPage('/home/zaru/admin/categoriesH')} className="btn btn-info mt-auto">
                Ir a categories
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card h-100">
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Hotels</h5>
              <img
                src="https://www.kayak.com.mx/news/wp-content/uploads/sites/29/2023/08/THEME_HOTEL_SIGN_FIVE_STARS_FACADE_BUILDING_GettyImages-1320779330-3-1640x1312.jpg"
                class="img-fluid" alt="..."
                style={{ width: '200px', height: '200px', objectFit: 'cover', margin: 'auto'}}
              ></img>
              <p className="card-text">Página de CRUD de hotels</p>
              <button onClick={() => goToPage('/home/zaru/admin/hotels')} className="btn btn-info mt-auto">
                Ir a hotels
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card h-100">
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Users</h5>
              <img src="https://canvia.com/wp-content/uploads/2023/06/banner-autentificacion-1.jpg"
                class="img-fluid"
                alt="..."
                style={{ width: '200px', height: '200px', objectFit: 'cover', margin: 'auto' }}
              ></img>
              <p className="card-text">Página de control de usuarios</p>
              <button onClick={() => goToPage('/home/zaru/admin/users')} className="btn btn-info mt-auto">
                Ir a users
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
