package com.example.proyecto_porfolio_back;

import ch.qos.logback.core.rolling.helper.IntegerTokenConverter;
import org.springframework.data.repository.Repository;

import java.util.List;

public interface PersonaRepositorio extends Repository<Persona, Integer> {
    List<Persona> findAll();
    Persona findById(int id);
    Persona save(Persona persona);
    void delete(Persona persona);

}
