package com.ibm.grupo2.service;


import com.ibm.grupo2.repository.usuarios.UsuariosRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import com.ibm.grupo2.model.seguridad.Usuario;

@Service
public class UsuariosServiceImpl implements UsuariosService{

    @Autowired
    private UsuariosRepo usuariosRepo;

    @Override
    public List<Usuario> findAll(){
        return (List<Usuario>) usuariosRepo.findAll();

    }
    
}