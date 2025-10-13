# 📝 ToDo App con Angular Signals

Este proyecto es una práctica en Angular enfocada en el uso de **signals** (`signal`, `computed`, `effect` y `toSignal`) para manejar estado de manera reactiva.

---

## 🎯 Objetivo

Construir una aplicación de tareas (**ToDo App**) que permita crear, listar, completar y eliminar tareas, con persistencia en `localStorage` y simulación de una API con RxJS.

---

## 📋 Requerimientos

### 1. Configuración inicial

- [x] La primera vez que se abra la app, debe solicitar el **nombre del usuario**.
- [x] Guardar el nombre en **`localStorage`**.
- [x] En visitas posteriores, mostrar saludo tipo:  
       _“Bienvenido de nuevo, Welinton 👋”_.

---

### 2. Gestión de Tareas

- [ ] Cada tarea debe tener:
  - `id` (autogenerado)
  - `titulo` (obligatorio, máx. 50 caracteres, no repetido)
  - `descripcion` (opcional, máx. 200 caracteres)
  - `color` (categoría: rojo = urgente, verde = normal, etc.)
  - `completada` (boolean)

- [ ] Validaciones:
  - No crear tareas sin título.
  - No permitir títulos duplicados.
  - Respetar límites de caracteres.

- [ ] Al marcar como completada, actualizar automáticamente la lista.

---

### 3. Signals y estado

- [ ] Usar un `signal<Task[]>` para manejar la lista de tareas.
- [ ] Definir `computed` para:
  - Cantidad total de tareas.
  - Cantidad de tareas completadas.
  - Cantidad de tareas pendientes.
- [ ] Definir `effect` para:
  - Guardar las tareas en **`localStorage`** cada vez que cambien.
  - Mostrar en consola un resumen al agregar o completar tareas.

---

### 4. Persistencia

- [ ] Al cargar la app:
  - Si hay tareas en `localStorage`, cargarlas.
  - Si no, iniciar con lista vacía.

---

### 5. Interfaz

- [ ] **Formulario de creación de tareas** con título, descripción y color.
- [ ] **Lista de tareas** que muestre:
  - Título (estilizado por color).
  - Descripción en pequeño.
  - Checkbox para marcar como completada.
  - Botón para eliminar tarea.

---

### 6. Filtros

- [ ] Incluir un filtro para mostrar:
  - Todas las tareas.
  - Solo completadas.
  - Solo pendientes.
- [ ] El filtro debe ser un `signal` y aplicarse con un `computed`.

---

### 7. Simulación de API

- [ ] Crear `TasksService` que simule API con RxJS:
  - Retorne un observable con `of(tareas)` retrasado 2s.
  - Convertir observable a signal con `toSignal()`.
- [ ] Mostrar loader mientras se cargan las tareas.

---

### 8. Extras (Opcional)

- [ ] Paginación simple (5 tareas por página).
- [ ] Ordenar tareas por fecha de creación.
- [ ] Modo oscuro/claro con `signal<'light' | 'dark'>`.
- [ ] Botón para **resetear la app** (borrar usuario y tareas de `localStorage`).

---

## 📦 Tecnologías

- Angular 17+
- Signals (`signal`, `computed`, `effect`, `toSignal`)
- RxJS
- localStorage

---

## 📜 Licencia

MIT License – Puedes usar este proyecto como referencia o práctica.
