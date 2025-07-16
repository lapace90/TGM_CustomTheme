{**
 * TGM_CustomTheme - Ajout du CSS personnalisé
 *}
{extends file='parent:_partials/stylesheets.tpl'}

{block name='stylesheets' append}
  <link rel="stylesheet" href="{$urls.theme_assets|cat:'css/custom.css'}" type="text/css" media="all">
{/block}