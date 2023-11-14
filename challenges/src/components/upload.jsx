import React, { useEffect } from 'react';
import { useUploadHook } from '../hooks/useUpload';
import { useDispatch, useSelector } from 'react-redux';
import { loginWithGoogle } from '../store/slices/Thunks';

export default function Upload() {
    const dispatch = useDispatch();
    const { files, percent, handleChange, handleUpload, handleRemove, handleGetAll } = useUploadHook();
    const { user } = useSelector((state) => state.auth);

    useEffect(() => {
        handleGetAll();
    }, [handleGetAll]);

    return (
        <div>
            {user ? (
                <>
                    <input type="file" onChange={handleChange} name="archivo" />
                    <button onClick={handleUpload}>Upload to Firebase</button>
                    <button onClick={handleRemove}>Remove from Firebase</button>
                    <p>{percent} "% done</p>
                    {files.map((item, key) => (
                        <img width="100px" src={item} alt="" key={key} />
                    ))}
                </>
            ) : (
                <div>
                    <button onClick={() => dispatch(loginWithGoogle())}>Login with Google</button>
                    {/* Puedes agregar contenido adicional aquí si es necesario */}
                </div>
            )}
        </div>
    );
}
