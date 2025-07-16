{extends file='parent:layouts/layout-both-columns.tpl'}

{block name='head' append}
  <link rel="stylesheet" href="{$urls.theme_assets}css/custom.css?v={$smarty.now|date_format:'%Y%m%d%H%M%S'}" type="text/css" media="all">
{/block}