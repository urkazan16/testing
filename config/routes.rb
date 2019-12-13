Rails.application.routes.draw do
  get 'testing/index'
  get 'welcome/index'

  root 'welcome#index'

end
