# TP CRUD Products

API Express pour gerer un inventaire de produits en memoire a partir d'un pseudo ORM (`products.orm.js`).

## Installation

```bash
npm install
```

## Lancement

```bash
npm run dev
```

ou

```bash
npm start
```

Serveur: `http://localhost:3000`

## Routes

- `GET /products` : liste tous les produits.
- `GET /products/:id` : retourne un produit, `404` si introuvable.
- `POST /products` : cree un produit, retourne `201`.
- `PUT /products/:id` : met a jour un produit, `404` si introuvable.
- `DELETE /products/:id` : supprime un produit, retourne `204`.

## Exemple de payload POST/PUT

```json
{
  "name": "Chaise de bureau",
  "price": 149.99,
  "stock": 12
}
```
