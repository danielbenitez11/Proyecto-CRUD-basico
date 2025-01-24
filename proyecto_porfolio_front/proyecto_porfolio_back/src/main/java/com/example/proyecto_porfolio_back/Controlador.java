package com.example.proyecto_porfolio_back;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping({"/persona"})
public class Controlador {


    @Autowired
    PersonaService service;

    @GetMapping
    public List<Persona> listar() {
        return service.listar();
    }
    @PostMapping
    public Persona add(@RequestBody Persona persona) {
        return service.add(persona);
    }

    @GetMapping(path = {"/{id}"})
    public Persona listarId(@PathVariable("id") int id) {
        return service.listarId(id);
    }

    @PutMapping(path = {"/{id}"})
    public Persona edit(@RequestBody Persona persona, @PathVariable("id") int id) {
        persona.setId(id);
        return service.edit(persona);
    }

    @DeleteMapping(path = {"/{id}"})
    public Persona delete(@PathVariable("id") int id) {
        return service.delete(id);
    }


}
