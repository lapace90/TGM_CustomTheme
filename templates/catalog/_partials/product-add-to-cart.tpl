{extends file='parent:catalog/_partials/product-add-to-cart.tpl'}

{block name='product_add_to_cart' append}
<style>
/* Boutons du formulaire d'ajout au panier */
.product-add-to-cart .add-to-cart,
.product-add-to-cart .btn-primary,
button[data-button-action="add-to-cart"] {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
  border: none !important;
  border-radius: 30px !important;
  padding: 12px 30px !important;
  font-weight: 600 !important;
  transition: all 0.3s ease !important;
  text-transform: none !important;
  font-size: 16px !important;
}

.product-add-to-cart .add-to-cart:hover,
.product-add-to-cart .btn-primary:hover,
button[data-button-action="add-to-cart"]:hover {
  transform: translateY(-3px) !important;
  box-shadow: 0 8px 20px rgba(108, 99, 255, 0.3) !important;
}

/* Quantité */
.product-add-to-cart .qty {
  border: 2px solid #e0e0e0 !important;
  border-radius: 25px !important;
  padding: 8px 15px !important;
  font-weight: 600 !important;
}
</style>
{/block}