﻿var jw;
(function (jw) {
    (function (MaterialsTracker) {
        (function (Client) {
            var CoreListData = (function () {
                function CoreListData(data) {
                    this.listData = data;
                }
                return CoreListData;
            })();
            Client.CoreListData = CoreListData;

            var Filter = (function () {
                function Filter(trade, category, type) {
                    if (typeof trade != 'undefined') {
                        this.trade = trade;
                    }

                    if (typeof category != 'undefined') {
                        this.category = category;
                    }

                    if (typeof type != 'undefined') {
                        this.type = type;
                    }
                }
                return Filter;
            })();
            Client.Filter = Filter;

            var CoreListFilter = (function () {
                function CoreListFilter(coreListData) {
                    var _this = this;
                    this.filterCoreList = function (filter) {
                        var filteredData = {
                            listData: _this.coreListData.listData,
                            types: [],
                            subCategories: []
                        };

                        if (typeof filter != 'undefined' && filter != null) {
                            if (typeof filter.trade != 'undefined') {
                                filteredData.listData = [];

                                for (var i = 0; i < _this.coreListData.listData.length; i++) {
                                    if (_this.coreListData.listData[i].trade.toString().trim().toLowerCase() === filter.trade.trim().toLowerCase()) {
                                        filteredData.listData.push(_this.coreListData.listData[i]);

                                        if (filteredData.subCategories.indexOf(_this.coreListData.listData[i].productSubCategory) === -1) {
                                            filteredData.subCategories.push(_this.coreListData.listData[i].productSubCategory);
                                        }
                                    }
                                }
                            }

                            if (typeof filter.category != 'undefined' && filter.category != null) {
                                var tempListData = [];

                                for (var i = 0; i < filteredData.listData.length; i++) {
                                    if (filteredData.listData[i].productSubCategory.toString().trim().toLowerCase() === filter.category.trim().toLowerCase()) {
                                        tempListData.push(filteredData.listData[i]);
                                    }
                                }

                                filteredData.listData = tempListData;

                                for (var i = 0; i < filteredData.listData.length; i++) {
                                    if (filteredData.types.indexOf(filteredData.listData[i].type) === -1) {
                                        filteredData.types.push(filteredData.listData[i].type);
                                    }
                                }
                            }

                            if (typeof filter.type != 'undefined' && filter.type !== null) {
                                tempListData = [];

                                for (var i = 0; i < filteredData.listData.length; i++) {
                                    if (filteredData.listData[i].type.toString().trim().toLowerCase() === filter.type.trim().toLowerCase()) {
                                        tempListData.push(filteredData.listData[i]);
                                    }
                                }

                                filteredData.listData = tempListData;
                            }
                        }

                        return filteredData;
                    };
                    this.coreListData = coreListData;
                }
                return CoreListFilter;
            })();
            Client.CoreListFilter = CoreListFilter;
        })(MaterialsTracker.Client || (MaterialsTracker.Client = {}));
        var Client = MaterialsTracker.Client;
    })(jw.MaterialsTracker || (jw.MaterialsTracker = {}));
    var MaterialsTracker = jw.MaterialsTracker;
})(jw || (jw = {}));
//# sourceMappingURL=ClientScripts.js.map
