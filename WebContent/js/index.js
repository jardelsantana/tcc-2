var tabs = {
    init: function() {
        this.cacheDom();
        this.bindEvents();
    },
  cacheDom: function() {
        this.$ul = $('#hiq-info-tabs');
        this.$li = this.$ul.find('li');
        this.$a = this.$ul.find('a');
        this.$content = $('.tab-content');
    },
    bindEvents: function() {
        this.$a.on('click', this.tabClicked.bind(this));
    },
    tabClicked: function(event) {
      var tab_id = $(event.target).attr('data-tab');
      
      this.$li.removeClass('active');
		  this.$content.removeClass('active');

		  $(event.target).parent().addClass('active');
		  $("#"+tab_id).addClass('active');
    }
       
  
};

tabs.init();