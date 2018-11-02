const symbols = `<symbol id="bold" viewBox="0 0 32 32"><path d="M22.996 15.023c1.339-1.591 2.147-3.643 2.147-5.88 0-5.041-4.102-9.143-9.143-9.143h-11.429v32h13.714c5.041 0 9.143-4.102 9.143-9.143 0-3.32-1.779-6.232-4.433-7.834zM11.429 4.571h3.625c1.999 0 3.625 2.051 3.625 4.571s-1.626 4.571-3.625 4.571h-3.625v-9.143zM17.107 27.429h-5.679v-9.143h5.679c2.087 0 3.786 2.051 3.786 4.571s-1.698 4.571-3.786 4.571z"></path></symbol>
<symbol id="emoji" viewBox="0 0 32 32"><path d="M16 24.789c-3.756 0-6.911-2.254-8.188-5.559h16.376c-1.277 3.305-4.432 5.559-8.188 5.559zM10.366 14.423c-1.352 0-2.404-1.052-2.404-2.404s1.052-2.404 2.404-2.404 2.404 1.052 2.404 2.404-1.052 2.404-2.404 2.404zM21.634 14.423c-1.352 0-2.404-1.052-2.404-2.404s1.052-2.404 2.404-2.404 2.404 1.052 2.404 2.404-1.052 2.404-2.404 2.404zM16 28.845c7.061 0 12.845-5.784 12.845-12.845s-5.784-12.845-12.845-12.845-12.845 5.784-12.845 12.845 5.784 12.845 12.845 12.845zM16 0c8.864 0 16 7.136 16 16s-7.136 16-16 16-16-7.136-16-16 7.136-16 16-16z"></path></symbol>
<symbol id="italic" viewBox="0 0 32 32"><path d="M29.714 0v2.286h-4.571l-11.429 27.429h4.571v2.286h-16v-2.286h4.571l11.429-27.429h-4.571v-2.286z"></path></symbol>
<symbol id="quote" viewBox="0 0 32 32"><path d="M7.024 13.003c3.862 0 6.993 3.131 6.993 6.993s-3.131 6.993-6.993 6.993-6.993-3.131-6.993-6.993l-0.031-0.999c0-7.724 6.262-13.986 13.986-13.986v3.996c-2.668 0-5.177 1.039-7.064 2.926-0.363 0.363-0.695 0.75-0.994 1.156 0.357-0.056 0.723-0.086 1.096-0.086zM25.007 13.003c3.862 0 6.993 3.131 6.993 6.993s-3.131 6.993-6.993 6.993-6.993-3.131-6.993-6.993l-0.031-0.999c0-7.724 6.262-13.986 13.986-13.986v3.996c-2.668 0-5.177 1.039-7.064 2.926-0.363 0.363-0.695 0.75-0.994 1.156 0.357-0.056 0.723-0.086 1.096-0.086z"></path></symbol>
<symbol id="unordered-list" viewBox="0 0 32 32"><path d="M12 2h20v4h-20v-4zM12 14h20v4h-20v-4zM12 26h20v4h-20v-4zM0 4c0 2.209 1.791 4 4 4s4-1.791 4-4c0-2.209-1.791-4-4-4s-4 1.791-4 4zM0 16c0 2.209 1.791 4 4 4s4-1.791 4-4c0-2.209-1.791-4-4-4s-4 1.791-4 4zM0 28c0 2.209 1.791 4 4 4s4-1.791 4-4c0-2.209-1.791-4-4-4s-4 1.791-4 4z"></path></symbol>
<symbol id="ordered-list" viewBox="0 0 32 32"><path d="M11 26h20v4h-20zM11 14h20v4h-20zM11 2h20v4h-20zM5 0v8h-2v-6h-2v-2zM3 16.438v1.563h4v2h-6v-4.563l4-1.875v-1.563h-4v-2h6v4.563zM7 22v10h-6v-2h4v-2h-4v-2h4v-2h-4v-2z"></path></symbol>
<symbol id="fullscreen" viewBox="0 0 32 32"><path d="M32 0v13l-5-5-6 6-3-3 6-6-5-5zM14 21l-6 6 5 5h-13v-13l5 5 6-6z"></path></symbol>
<symbol id="question" viewBox="0 0 32 32"><path d="M14 22h4v4h-4zM22 8c1.105 0 2 0.895 2 2v6l-6 4h-4v-2l6-4v-2h-10v-4h12zM16 3c-3.472 0-6.737 1.352-9.192 3.808s-3.808 5.72-3.808 9.192c0 3.472 1.352 6.737 3.808 9.192s5.72 3.808 9.192 3.808c3.472 0 6.737-1.352 9.192-3.808s3.808-5.72 3.808-9.192c0-3.472-1.352-6.737-3.808-9.192s-5.72-3.808-9.192-3.808zM16 0v0c8.837 0 16 7.163 16 16s-7.163 16-16 16c-8.837 0-16-7.163-16-16s7.163-16 16-16z"></path></symbol>
<symbol id="contract" viewBox="0 0 32 32"><path d="M14 18v13l-5-5-6 6-3-3 6-6-5-5zM32 3l-6 6 5 5h-13v-13l5 5 6-6z"></path></symbol>
<symbol id="link" viewBox="0 0 32 32"><path d="M29.187 2.933l-0.12-0.121c-2.813-2.812-7.415-2.812-10.228 0l-6.516 6.517c-2.812 2.812-2.812 7.415 0 10.227l0.12 0.12c0.234 0.234 0.482 0.446 0.739 0.641l2.386-2.386c-0.278-0.164-0.542-0.361-0.78-0.599l-0.121-0.121c-1.527-1.527-1.527-4.012 0-5.539l6.517-6.516c1.527-1.527 4.012-1.527 5.539 0l0.121 0.12c1.527 1.527 1.527 4.012 0 5.539l-2.948 2.948c0.512 1.264 0.754 2.611 0.733 3.955l4.559-4.559c2.812-2.812 2.812-7.415-0-10.227zM19.557 12.323c-0.234-0.234-0.482-0.446-0.739-0.641l-2.386 2.385c0.278 0.164 0.542 0.361 0.78 0.599l0.121 0.121c1.527 1.527 1.527 4.012 0 5.539l-6.517 6.517c-1.527 1.527-4.012 1.527-5.539 0l-0.121-0.121c-1.527-1.527-1.527-4.012 0-5.539l2.948-2.948c-0.512-1.264-0.754-2.611-0.733-3.955l-4.559 4.559c-2.812 2.812-2.812 7.415 0 10.228l0.12 0.12c2.813 2.812 7.415 2.812 10.228 0l6.516-6.517c2.812-2.812 2.812-7.415 0-10.228l-0.12-0.12z"></path></symbol>
<symbol id="view" viewBox="0 0 32 32"><path d="M16 7.53c-10.379 0-15.561 7.594-15.777 7.918-0.223 0.335-0.223 0.771 0 1.106 0.216 0.323 5.398 7.917 15.777 7.917s15.561-7.594 15.777-7.918c0.223-0.335 0.223-0.771 0-1.106-0.216-0.323-5.398-7.917-15.777-7.917zM16 22.477c-7.726 0-12.34-4.822-13.696-6.479 1.352-1.661 5.941-6.475 13.696-6.475 7.726 0 12.34 4.822 13.696 6.479-1.352 1.661-5.941 6.475-13.696 6.475zM16 11.516c-2.473 0-4.484 2.012-4.484 4.484s2.011 4.484 4.484 4.484 4.484-2.012 4.484-4.484-2.011-4.484-4.484-4.484zM16 18.491c-1.374 0-2.491-1.118-2.491-2.491s1.118-2.491 2.491-2.491 2.491 1.118 2.491 2.491-1.118 2.491-2.491 2.491z"></path></symbol>
<symbol id="upload" viewBox="0 0 32 32"><path d="M21.334 16.532q0-0.233-0.15-0.384l-5.867-5.867q-0.15-0.15-0.384-0.15t-0.384 0.15l-5.85 5.85q-0.167 0.2-0.167 0.399 0 0.233 0.15 0.384t0.384 0.15h3.733v5.867q0 0.217 0.159 0.375t0.375 0.159h3.2q0.217 0 0.375-0.159t0.159-0.375v-5.867h3.734q0.217 0 0.375-0.159t0.159-0.375zM32 21.332q0 2.65-1.875 4.525t-4.525 1.875h-18.133q-3.083 0-5.275-2.192t-2.192-5.275q0-2.166 1.167-4t3.134-2.75q-0.034-0.5-0.034-0.717 0-3.533 2.5-6.033t6.033-2.5q2.6 0 4.759 1.45t3.142 3.849q1.184-1.033 2.767-1.033 1.767 0 3.017 1.25t1.25 3.017q0 1.267-0.683 2.3 2.166 0.516 3.558 2.258t1.392 3.975z"></path></symbol>
<symbol id="copy" viewBox="0 0 32 32"><path d="M28.681 11.159c-0.694-0.947-1.662-2.053-2.724-3.116s-2.169-2.030-3.116-2.724c-1.612-1.182-2.393-1.319-2.841-1.319h-11.5c-1.379 0-2.5 1.121-2.5 2.5v23c0 1.378 1.121 2.5 2.5 2.5h19c1.378 0 2.5-1.122 2.5-2.5v-15.5c0-0.448-0.137-1.23-1.319-2.841zM24.543 9.457c0.959 0.959 1.712 1.825 2.268 2.543h-4.811v-4.811c0.718 0.556 1.584 1.309 2.543 2.268v0zM28 29.5c0 0.271-0.229 0.5-0.5 0.5h-19c-0.271 0-0.5-0.229-0.5-0.5v-23c0-0.271 0.229-0.5 0.5-0.5 0 0 11.499-0 11.5 0v7c0 0.552 0.448 1 1 1h7v15.5zM18.841 1.319c-1.612-1.182-2.393-1.319-2.841-1.319h-11.5c-1.378 0-2.5 1.121-2.5 2.5v23c0 1.207 0.86 2.217 2 2.45v-25.45c0-0.271 0.229-0.5 0.5-0.5h15.215c-0.301-0.248-0.595-0.477-0.873-0.681z"></path></symbol>
<symbol id="search" viewBox="0 0 32 32">
<path d="M31.008 27.231l-7.58-6.447c-0.784-0.705-1.622-1.029-2.299-0.998 1.789-2.096 2.87-4.815 2.87-7.787 0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12c2.972 0 5.691-1.081 7.787-2.87-0.031 0.677 0.293 1.515 0.998 2.299l6.447 7.58c1.104 1.226 2.907 1.33 4.007 0.23s0.997-2.903-0.23-4.007zM12 20c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z"></path>
</symbol>
<symbol id="google" viewBox="0 0 32 32"><path d="M19.958 16.236q0 2.889-1.208 5.146t-3.444 3.528-5.125 1.271q-2.069 0-3.958-0.806t-3.25-2.167-2.167-3.25-0.806-3.958 0.806-3.958 2.167-3.25 3.25-2.167 3.958-0.806q3.972 0 6.819 2.667l-2.764 2.653q-1.625-1.569-4.056-1.569-1.708 0-3.16 0.861t-2.299 2.34-0.847 3.229 0.847 3.229 2.299 2.34 3.16 0.861q1.153 0 2.118-0.319t1.59-0.799 1.090-1.090 0.681-1.153 0.299-1.028h-5.778v-3.5h9.611q0.167 0.875 0.167 1.694zM32 14.542v2.917h-2.903v2.903h-2.917v-2.903h-2.903v-2.917h2.903v-2.903h2.917v2.903h2.903z"></path></symbol>
<symbol id="wechat" viewBox="0 0 32 32"><path d="M9.062 9.203q0-0.641-0.391-1.031t-1.031-0.391q-0.672 0-1.188 0.398t-0.516 1.023q0 0.609 0.516 1.008t1.188 0.398q0.641 0 1.031-0.383t0.391-1.023zM20.672 17.125q0-0.438-0.398-0.781t-1.023-0.344q-0.422 0-0.773 0.352t-0.352 0.773q0 0.438 0.352 0.789t0.773 0.352q0.625 0 1.023-0.344t0.398-0.797zM16.984 9.203q0-0.641-0.383-1.031t-1.023-0.391q-0.672 0-1.188 0.398t-0.516 1.023q0 0.609 0.516 1.008t1.188 0.398q0.641 0 1.023-0.383t0.383-1.023zM26.906 17.125q0-0.438-0.406-0.781t-1.016-0.344q-0.422 0-0.773 0.352t-0.352 0.773q0 0.438 0.352 0.789t0.773 0.352q0.609 0 1.016-0.344t0.406-0.797zM22.75 10.922q-0.484-0.063-1.094-0.063-2.641 0-4.859 1.203t-3.492 3.258-1.273 4.492q0 1.219 0.359 2.375-0.547 0.047-1.062 0.047-0.406 0-0.781-0.023t-0.859-0.102-0.695-0.109-0.852-0.164-0.781-0.164l-3.953 1.984 1.125-3.406q-4.531-3.172-4.531-7.656 0-2.641 1.523-4.859t4.125-3.492 5.68-1.273q2.75 0 5.195 1.031t4.094 2.852 2.133 4.070zM32 19.688q0 1.828-1.070 3.492t-2.898 3.023l0.859 2.828-3.109-1.703q-2.344 0.578-3.406 0.578-2.641 0-4.859-1.102t-3.492-2.992-1.273-4.125 1.273-4.125 3.492-2.992 4.859-1.102q2.516 0 4.734 1.102t3.555 3 1.336 4.117z"></path></symbol>
<symbol id="weibo" viewBox="0 0 32 32"><path d="M13.242 27.106c-5.22 0.517-9.727-1.847-10.065-5.27-0.339-3.429 3.62-6.618 8.834-7.135 5.22-0.517 9.727 1.847 10.059 5.27 0.345 3.429-3.614 6.624-8.828 7.135zM23.677 15.735c-0.443-0.135-0.751-0.222-0.517-0.806 0.505-1.268 0.554-2.358 0.006-3.14-1.022-1.459-3.823-1.385-7.030-0.037 0 0-1.010 0.437-0.751-0.357 0.492-1.588 0.419-2.912-0.351-3.681-1.742-1.742-6.372 0.068-10.342 4.038-2.967 2.961-4.691 6.119-4.691 8.846 0 5.208 6.686 8.379 13.224 8.379 8.569 0 14.276-4.98 14.276-8.933 0-2.395-2.013-3.749-3.823-4.309z"></path><path d="M29.371 6.193c-2.069-2.296-5.122-3.17-7.942-2.573v0c-0.653 0.142-1.065 0.782-0.923 1.428 0.142 0.653 0.776 1.065 1.428 0.923 2.007-0.425 4.174 0.197 5.645 1.828s1.872 3.854 1.237 5.799v0c-0.203 0.634 0.142 1.311 0.776 1.521 0.634 0.203 1.311-0.142 1.521-0.776v-0.006c0.887-2.721 0.326-5.848-1.742-8.145z"></path><path d="M26.189 9.068c-1.010-1.12-2.499-1.545-3.866-1.25-0.56 0.117-0.917 0.677-0.8 1.237 0.123 0.56 0.677 0.917 1.231 0.794v0c0.671-0.142 1.397 0.068 1.89 0.609 0.492 0.548 0.628 1.293 0.412 1.945v0c-0.172 0.542 0.123 1.133 0.671 1.311 0.548 0.172 1.133-0.123 1.311-0.671 0.431-1.336 0.16-2.863-0.85-3.977z"></path><path d="M13.531 20.907c-0.185 0.314-0.585 0.462-0.899 0.332-0.314-0.123-0.406-0.48-0.228-0.782 0.185-0.302 0.573-0.449 0.88-0.332 0.308 0.111 0.419 0.462 0.246 0.782zM11.863 23.037c-0.505 0.806-1.588 1.157-2.401 0.788-0.8-0.363-1.040-1.299-0.536-2.087 0.499-0.782 1.545-1.133 2.352-0.794 0.819 0.351 1.084 1.28 0.585 2.093zM13.759 17.336c-2.481-0.646-5.288 0.591-6.366 2.776-1.102 2.229-0.037 4.709 2.469 5.522 2.598 0.837 5.664-0.449 6.729-2.85 1.053-2.358-0.259-4.777-2.832-5.448z"></path></symbol>
<symbol id="twitter" viewBox="0 0 32 32"><path d="M32 6.077c-1.175 0.525-2.443 0.875-3.768 1.031 1.356-0.812 2.393-2.1 2.887-3.631-1.268 0.75-2.674 1.3-4.168 1.593-1.2-1.275-2.906-2.068-4.793-2.068-3.624 0-6.561 2.937-6.561 6.561 0 0.512 0.056 1.012 0.169 1.493-5.455-0.275-10.292-2.887-13.529-6.861-0.562 0.969-0.887 2.1-0.887 3.299 0 2.275 1.156 4.287 2.918 5.461-1.075-0.031-2.087-0.331-2.974-0.819 0 0.025 0 0.056 0 0.081 0 3.181 2.262 5.836 5.268 6.436-0.55 0.15-1.131 0.231-1.731 0.231-0.425 0-0.831-0.044-1.237-0.119 0.837 2.606 3.262 4.505 6.13 4.562-2.25 1.762-5.074 2.812-8.155 2.812-0.531 0-1.050-0.031-1.568-0.094 2.912 1.868 6.361 2.949 10.067 2.949 12.073 0 18.678-10.004 18.678-18.678 0-0.287-0.006-0.569-0.019-0.85 1.281-0.919 2.393-2.075 3.274-3.393z"></path></symbol>
<symbol id="icon-reply" viewBox="0 0 28 28">
<path d="M0 18c0 2.188 1.094 5.047 1.984 7.047 0.172 0.359 0.344 0.859 0.578 1.188 0.109 0.156 0.219 0.266 0.438 0.266 0.313 0 0.5-0.25 0.5-0.547 0-0.25-0.063-0.531-0.078-0.781-0.047-0.641-0.078-1.281-0.078-1.922 0-7.453 4.422-8.75 11.156-8.75h3.5v4c0 0.547 0.453 1 1 1 0.266 0 0.516-0.109 0.703-0.297l8-8c0.187-0.187 0.297-0.438 0.297-0.703s-0.109-0.516-0.297-0.703l-8-8c-0.187-0.187-0.438-0.297-0.703-0.297-0.547 0-1 0.453-1 1v4h-3.5c-5.125 0-11.5 0.906-13.672 6.297-0.656 1.656-0.828 3.453-0.828 5.203z"></path>
</symbol> 
<symbol id="icon-chevron-left" viewBox="0 0 28 28">
<path d="M22.603 4.845l-9.155 9.155 9.155 9.155c0.431 0.431 0.431 1.121 0 1.552l-2.862 2.862c-0.431 0.431-1.121 0.431-1.552 0l-12.793-12.793c-0.431-0.431-0.431-1.121 0-1.552l12.793-12.793c0.431-0.431 1.121-0.431 1.552 0l2.862 2.862c0.431 0.431 0.431 1.121 0 1.552z"></path>
</symbol>
<symbol id="icon-chevron-right" viewBox="0 0 28 28">
<path d="M22.603 14.776l-12.793 12.793c-0.431 0.431-1.121 0.431-1.552 0l-2.862-2.862c-0.431-0.431-0.431-1.121 0-1.552l9.155-9.155-9.155-9.155c-0.431-0.431-0.431-1.121 0-1.552l2.862-2.862c0.431-0.431 1.121-0.431 1.552 0l12.793 12.793c0.431 0.431 0.431 1.121 0 1.552z"></path>
</symbol>
<symbol id="icon-chevron-up" viewBox="0 0 32 32">
<path d="M31.507 22.571l-3.271 3.251c-0.493 0.493-1.281 0.493-1.773 0l-10.463-10.463-10.463 10.463c-0.493 0.493-1.281 0.493-1.773 0l-3.271-3.251c-0.493-0.493-0.493-1.3 0-1.793l14.621-14.601c0.493-0.493 1.281-0.493 1.773 0l14.621 14.601c0.493 0.493 0.493 1.3 0 1.793z"></path>
</symbol>
`

export default symbols
