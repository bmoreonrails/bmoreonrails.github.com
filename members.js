// http://api.meetup.com/2/members/?_=1358903423986&order=name&group_urlname=bmore-on-rails&offset=0&format=json&page=200&sig_id=5560034&sig=4a5245d524bd4c8e57ad9bf0e0b75e917f14d2b7

function buildMembers() {
  $.ajax({
    url: "http://api.meetup.com/2/members/?_=1358904482064&order=visited&group_urlname=bmore-on-rails&desc=true&offset=0&format=json&page=200&sig_id=5560034&sig=712a7b2e326836061c3a3735916c09fbd6bbb9c1",
    dataType: 'jsonp',
    success: function(response) {
      _.chain(response.results)
//        .each(function(member) { console.log(member.photo && member.photo.thumb_link); })
        .filter(function(member) { return member.photo && member.photo.thumb_link; })
        .each(function(member) {
          $('.members-array').append('<div class="member"><a href="" title="'
                                     + member.name + '"><img src="'
                                     + member.photo.thumb_link + '" /></a></div>');
        });
    }
  });
}

$(function() {
  buildMembers();
});
