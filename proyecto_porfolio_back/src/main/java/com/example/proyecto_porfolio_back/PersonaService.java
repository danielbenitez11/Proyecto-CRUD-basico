package com.example.proyecto_porfolio_back;

import java.util.List;

public interface PersonaService {
    List<Persona> listar();
    Persona listarId(int id);
    Persona add(Persona persona);
    Persona edit(Persona persona);
    Persona delete(int id);


}
