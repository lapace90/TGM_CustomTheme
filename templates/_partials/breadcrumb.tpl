<nav data-depth="{$breadcrumb.count}" class="breadcrumb hidden-sm-down">
  <ol>
    {block name='breadcrumb'}
      {foreach from=$breadcrumb.links item=path name=breadcrumb}
        {block name='breadcrumb_item'}
          <li>
            {if not $smarty.foreach.breadcrumb.last}
              <a href="{$path.url}"><span>{$path.title}</span></a>
            {else}
              <span>{$path.title}</span>
            {/if}
          </li>
        {/block}
      {/foreach}
    {/block}
  </ol>
</nav>
