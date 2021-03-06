var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-framework", "../utils/ui-event"], function (require, exports, aurelia_framework_1, ui_event_1) {
    var UIButtonGroup = (function () {
        function UIButtonGroup(element) {
            this.element = element;
            this._classes = '';
            this._toggle = false;
            this._vertical = false;
            this.value = '';
            this.id = '';
            if (element.hasAttribute('toggle'))
                this._toggle = element.getAttribute('toggle') || 'single';
            this._vertical = element.hasAttribute('vertical');
            if (element.hasAttribute('large'))
                this._size = 'large';
            if (element.hasAttribute('small'))
                this._size = 'small';
            if (element.hasAttribute('primary'))
                this._theme = 'primary';
            if (element.hasAttribute('secondary'))
                this._theme = 'secondary';
            if (element.hasAttribute('info'))
                this._theme = 'info';
            if (element.hasAttribute('danger'))
                this._theme = 'danger';
            if (element.hasAttribute('success'))
                this._theme = 'success';
            if (element.hasAttribute('warning'))
                this._theme = 'warning';
            this.element.UIElement = this;
        }
        UIButtonGroup.prototype.bind = function () {
            if (this._vertical !== false)
                this._classes += "ui-vertical ";
        };
        UIButtonGroup.prototype.attached = function () {
            if (this._size) {
                $(this._buttonGroup).children('.ui-button')
                    .removeClass('ui-button-normal')
                    .addClass("ui-button-" + this._size);
            }
            if (this._toggle === false && this._theme) {
                $(this._buttonGroup).children('.ui-button')
                    .removeClass('ui-button-default')
                    .addClass("ui-button-" + this._theme);
            }
            if (this._toggle !== false) {
                $(this._buttonGroup).children('.ui-button')
                    .removeClass('ui-button-default')
                    .addClass("ui-button-secondary ui-button-toggle");
            }
            if (this.value !== null && this._toggle !== false)
                this._checkChange();
        };
        UIButtonGroup.prototype._valueChanged = function (newValue) {
            this._checkChange();
        };
        UIButtonGroup.prototype._clickHandler = function ($event) {
            if (this._toggle !== false) {
                $event.cancelBubble = true;
                if (this._toggle === 'multiple') {
                }
                else {
                    this.value = $event.detail.value;
                }
                ui_event_1.UIEvent.fireEvent('change', this.element, this.value, this._buttonGroup);
            }
        };
        UIButtonGroup.prototype._checkChange = function () {
            if (this._toggle === 'multiple') {
            }
            else {
                $(this._buttonGroup).children('.ui-checked').removeClass('ui-checked');
                var el = $(this._buttonGroup).children("[value='" + this.value + "']");
                el.addClass('ui-checked');
            }
        };
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], UIButtonGroup.prototype, "id");
        UIButtonGroup = __decorate([
            aurelia_framework_1.bindable({
                name: 'value',
                attribute: 'value',
                changeHandler: '_valueChanged',
                defaultBindingMode: aurelia_framework_1.bindingMode.twoWay,
                defaultValue: ''
            }),
            aurelia_framework_1.autoinject(),
            aurelia_framework_1.customElement('ui-button-group'), 
            __metadata('design:paramtypes', [Element])
        ], UIButtonGroup);
        return UIButtonGroup;
    })();
    exports.UIButtonGroup = UIButtonGroup;
});
