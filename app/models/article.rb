class Article < ApplicationRecord::Base
  validates :title, presence: true,
                    length: { minimum: 5 }

 # before_action :articles


# @employee = Articles.last

# puts @employee

end