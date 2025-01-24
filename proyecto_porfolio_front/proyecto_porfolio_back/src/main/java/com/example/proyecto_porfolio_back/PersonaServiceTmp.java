package com.example.proyecto_porfolio_back;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PersonaServiceTmp implements PersonaService{
    @Autowired
    private PersonaRepositorio repositorio;

    @Override
    public List<Persona> listar() {
        return repositorio.findAll();
    }

    @Override
    public Persona listarId(int id) {
        return repositorio.findById(id);
    }

    @Override
    public Persona add(Persona persona) {
        return repositorio.save(persona);
    }

    @Override
    public Persona edit(Persona persona) {
        return repositorio.save(persona);
    }

    @Override
    public Persona delete(int id) {
        Persona persona = repositorio.findById(id);
        if(persona != null){
            repositorio.delete(persona);
        }
        return persona;
    }
}
