import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './CrudCategoriesRoom.css';
import { useGetCategoriesR } from "../../../shared/hooks/AdminHotel/CategoriesRooms/useGetCategoriesR";
import { useDeleteCategoryRoom } from '../../../shared/hooks/AdminHotel/CategoriesRooms/useDeleteCategoryRoom';
import { ConfirmDelete } from './ConfirmDelete';
import { EditForm } from "./EditForm";
import { AddCategoryRoom } from "./AddCategoryRoom";
import editIcon from '../../../assets/img/editIcon.png'; 
import trashIcon from '../../../assets/img/eliminar.png'; 

export const CrudCategoriesRoom = () => {
  const { getCategories, isLoading, categoriesRooms, setCategoriesRooms } = useGetCategoriesR();
  const { deleteCategory } = useDeleteCategoryRoom();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);

  useEffect(() => {
    getCategories();
  }, []);

  useEffect(() => {
    console.log("Category Rooms:", categoriesRooms);
  }, [categoriesRooms]);

  const openDelConfirm = (categoryrooms) => {
    setSelectedCategory(categoryrooms);
    setShowConfirmDelete(true);
  };

  const confirmDelete = () => {
    if (selectedCategory) {
      deleteCategory(selectedCategory._id);
      setSelectedCategory(null);
      setShowConfirmDelete(false);
      getCategories();
    }
  };

  const cancelDelete = () => {
    setSelectedCategory(null);
    setShowConfirmDelete(false);
  };

  const openEditForm = (categoryRoom) => {
    setSelectedCategory(categoryRoom);
    setShowEditForm(true);
  };

  const closeEditForm = () => {
    setSelectedCategory(null);
    setShowEditForm(false);
  };

  const updateCategory = (updatedCategory) => {
    const updatedCategories = categoriesRooms.map(category => {
      if (category._id === updatedCategory._id) {
        return updatedCategory;
      }
      return category;
    });
    setCategoriesRooms(updatedCategories);
  };

  return (
    <div className="container">
      <div className="cont">
        <AddCategoryRoom />
        <br />
        <div className="scroll-table">
          {isLoading ? (
            <p>Cargando categorias...</p>
          ) : (
            <>
              {showConfirmDelete && <ConfirmDelete onDelete={confirmDelete} onCancel={cancelDelete} />}
              {showEditForm && <EditForm category={selectedCategory} onClose={closeEditForm} onUpdate={updateCategory} />}
              <table className="table table-hover table-success">
                <thead>
                  <tr>
                    <th scope="col">Name Category</th>
                    <th scope="col">Description</th>
                    <th scope="col">Option</th>
                  </tr>
                </thead>
                <tbody>
                  {categoriesRooms.map((categoryRoom, index) => (
                    <tr key={index}>
                      <td>{categoryRoom.nameCategoryRoom}</td>
                      <td>{categoryRoom.descriptionCategoryRoom}</td>
                      <td>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                          <img
                            src={editIcon}
                            alt="Editar"
                            style={{ cursor: 'pointer', width: '20px', marginRight: '20%' }}
                            onClick={() => openEditForm(categoryRoom)}
                          />
                          <img
                            src={trashIcon}
                            alt="Eliminar"
                            style={{ cursor: 'pointer', width: '20px' }}
                            onClick={() => openDelConfirm(categoryRoom)}
                          />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
