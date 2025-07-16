{extends file='parent:catalog/listing/category.tpl'}

{block name='product_list_header' append}
  {include file='catalog/_partials/category-header.tpl' listing=$listing category=$category}

{/block}