import React from "react";

const menuItems = [
  { categoria: "Cafés", items: [
    { nombre: "Espresso", descripcion: "Café intenso en taza pequeña", precio: "1,50€" },
    { nombre: "Café con leche", descripcion: "Café espresso con leche vaporizada", precio: "2,00€" },
    { nombre: "Capuccino", descripcion: "Café espresso, leche y espuma de leche", precio: "2,20€" }
  ]},
  { categoria: "Bollería", items: [
    { nombre: "Croissant", descripcion: "Clásico croissant de mantequilla", precio: "1,20€" },
    { nombre: "Napolitana de chocolate", descripcion: "Hojaldre relleno de chocolate", precio: "1,50€" }
  ]},
  { categoria: "Bebidas frías", items: [
    { nombre: "Zumo de naranja", descripcion: "Natural recién exprimido", precio: "2,50€" },
    { nombre: "Agua mineral", descripcion: "Botella 500ml", precio: "1,00€" }
  ]}
];

export default function Menu() {
  return (
    <div style={{ maxWidth: 500, margin: "2rem auto", padding: "1rem", background: "#fff", borderRadius: 8, boxShadow: "0 2px 8px #eee" }}>
      <h1 style={{ textAlign: "center", color: "#7c4d03" }}>Menú de la Cafetería</h1>
      {menuItems.map((cat) => (
        <section key={cat.categoria} style={{ marginBottom: 24 }}>
          <h2 style={{ color: "#b8860b", borderBottom: "1px solid #eee", paddingBottom: 4 }}>{cat.categoria}</h2>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {cat.items.map((item) => (
              <li key={item.nombre} style={{ margin: "12px 0", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <strong>{item.nombre}</strong>
                  <div style={{ fontSize: 14, color: "#555" }}>{item.descripcion}</div>
                </div>
                <span style={{ fontWeight: "bold", color: "#7c4d03" }}>{item.precio}</span>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}