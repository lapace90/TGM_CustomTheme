{extends file='parent:catalog/_partials/variant-links.tpl'}

{block name='variant_links' append}
<style>
/* Variantes plus jolies */
.variant-links {
  display: flex;
  gap: 5px;
  margin-top: 10px;
}

.variant-links a {
  width: 24px !important;
  height: 24px !important;
  border-radius: 50% !important;
  border: 2px solid #fff !important;
  box-shadow: 0 0 0 1px #ddd !important;
  transition: all 0.3s !important;
  display: block !important;
}

.variant-links a:hover {
  transform: scale(1.2) !important;
  box-shadow: 0 0 0 2px #6C63FF !important;
}

.variant-links .js-count {
  font-size: 12px;
  color: #666;
  align-self: center;
  margin-left: 5px;
}
</style>
{/block}