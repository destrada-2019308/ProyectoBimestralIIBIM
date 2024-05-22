import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import './CrudCategoriesH.css'
import { useGetCategoriesH } from "../../../shared/hooks/Admin/CategoriesHotel/useGetCategoriesH";
import editIcon from '../../../../src/assets/img/editIcon.png'
import trashIcon from '../../../../src/assets/img/eliminar.png'
import { useDeleteCategoryH } from "../../../shared/hooks/Admin/CategoriesHotel/useDeleteCategoryH";
import { ConfirmDelete } from "../ConfirmDelete";
import { EditForm } from "./EditForm";
import { AddCategoryH } from "./AddCategoryH";

export const CrudCategoriesH = () => {
    const { getCategories, isLoading, categorieshotels } = useGetCategoriesH()
    const [selectedCategory, setSelectedCategory] = useState(null)
    const { deleteCategory } = useDeleteCategoryH()
    const [showConfirmDelete, setShowConfirmDelete] = useState(false)
    const [showEditForm, setShowEditForm] = useState(false)

    useEffect(() => {
        getCategories()
    }, [])

    const openDelConfirm = (categoryhotels) => {
        setSelectedCategory(categoryhotels)
        setShowConfirmDelete(true)
    }

    const confirmDelete = () => {
        if (selectedCategory) {
            deleteCategory(selectedCategory._id)
            setSelectedCategory(null)
            setShowConfirmDelete(false)
            getCategories()
        }
    }

    const cancelDelete = () => {
        setSelectedCategory(null)
        setShowConfirmDelete(false)
    }

    //Configuracion de form para editar usuario
    const openEditForm = (categoryhotels) => {
        setSelectedCategory(categoryhotels)
        setShowEditForm(true)
        getCategories()
    }

    const closeEditForm = () => {
        setSelectedCategory(null)
        setShowEditForm(false)
        getCategories()
    }
    //Configuracion de form para editar usuario

    return (
        <div className="container">
            <div className="cont">
                <AddCategoryH></AddCategoryH>
                <br></br>
                <div className="scroll-table">
                    {isLoading ? (
                        <p>Cargando categorias...</p>
                    ) : (
                        <>
                            {showConfirmDelete && <ConfirmDelete onDelete={confirmDelete} onCancel={cancelDelete} />}
                            {showEditForm && <EditForm categoryhotels={selectedCategory} onClose={closeEditForm} />}
                            <table className="table table-hover table-success">
                                <thead>
                                    <tr>
                                        <th scope="col">nameCategory</th>
                                        <th scope="col">descriptionCategory</th>
                                        <th scope="col">Option</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {categorieshotels.map((categoryhotels, index) => (
                                        <tr key={index}>
                                            <td>{categoryhotels.nameCategoryHotel}</td>
                                            <td>{categoryhotels.descriptionCategoryHotel}</td>
                                            <td>
                                                <div style={{ display: 'flex', justifyContent: 'center' }}>
                                                    <img
                                                        src={editIcon}
                                                        alt="Editar"
                                                        style={{ cursor: 'pointer', width: '20px', marginRight: '20%' }}
                                                        onClick={() => openEditForm(categoryhotels)}
                                                    />
                                                    <img
                                                        src={trashIcon}
                                                        alt="Eliminar"
                                                        style={{ cursor: 'pointer', width: '20px' }}
                                                        onClick={() => openDelConfirm(categoryhotels)}
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
    )
}
