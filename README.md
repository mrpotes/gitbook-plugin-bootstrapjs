gitbook-plugin-bootstrapjs
==========================

This plugin for GitBook enables the [Bootstrap JavaScript plugins](http://getbootstrap.com/javascript).

The following Bootstrap plugins (`component` below) are made available (the others are not deemed suited to GitBook, but could be added if needed):

* modal
* dropdown
* tab
* tooltip
* popover
* collapse

The plugin looks for elements matching the following selector:

```
"." + component + ",[data-"+component+"]"
```

For example, `.popover,[data-popover]`. This is because some Bootstrap plugins are generally enabled using a class (e.g. `modal`), but some (e.g. `popover`)
don't work if the class of that name is used, so `data-*` attributes are also supported.

By default, all Bootstrap plugins are enabled. This can be changed by providing plugin options in your `book.json`, optionally with a different selector if
you need one:

```
{
  "plugins": [ "bootstrapjs" ],
  "pluginsConfig": {
    "bootstrapjs": {
      modal: true,
      dropdown: true,
      popover: { selector: "[data-toggle=popover]" }
    }
  }
}
```
